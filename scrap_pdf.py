#@title scrap pdfs
import requests
from bs4 import BeautifulSoup
import os
import time
import logging
from urllib.parse import urljoin
from concurrent.futures import ThreadPoolExecutor, as_completed

# Configure logging
logging.basicConfig(filename='pdf_scraper.log', level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')
# Create a console handler for logging to the terminal
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)  # Log level can be set to DEBUG for more details
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
console_handler.setFormatter(formatter)

# Add the console handler to the root logger
logging.getLogger().addHandler(console_handler)

# Base URL
base_url = "https://hrworld-sa.com"

# Headers to mimic a browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

def download_pdf(url):
    """Downloads a PDF file from a given URL."""
    try:
        response = requests.get(url, headers=headers, stream=True)
        response.raise_for_status()  # Raise an exception for bad status codes
        filename = os.path.join('pdfs', os.path.basename(url))
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        logging.info(f"Downloaded PDF: {url} to {filename}")
    except Exception as e:
        logging.error(f"Error downloading {url}: {e}")

def extract_links(url, depth=0, max_depth=7):
    """Extracts PDF and other links from a webpage."""
    pdf_links = set()
    other_links = set()

    if depth > max_depth:
        return pdf_links, other_links

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')

        for link in soup.find_all('a', href=True):
            href = link['href']
            href = href.replace('\\', '/')

            # Construct absolute URL
            absolute_url = urljoin(url, href)  # Use urljoin for proper joining

            # Check for PDF files
            if absolute_url.endswith('.pdf') or (link.get('type') and 'pdf' in link.get('type')):
                pdf_links.add(absolute_url)
                logging.info(f"Found PDF: {absolute_url}")

            # Check for other links within the base URL (excluding YouTube)
            elif absolute_url.startswith(base_url) and 'youtube.com' not in absolute_url:
                other_links.add(absolute_url)
                logging.debug(f"Found URL: {absolute_url}")

    except Exception as e:
        logging.error(f"Error accessing {url}: {e}")

    return pdf_links, other_links

def crawl_website(start_url, max_depth=7):
    """Crawls the website to download PDFs and extract links."""
    visited_urls = set()
    pdf_links, other_links = extract_links(start_url)
    visited_urls.add(start_url)

    # Create directory for downloaded PDFs
    os.makedirs('pdfs', exist_ok=True)

    # Download PDFs
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(download_pdf, pdf_link): pdf_link for pdf_link in pdf_links}

        # Monitor downloads
        for future in as_completed(futures):
            pdf_link = futures[future]
            try:
                future.result()  # Wait for the download to complete
            except Exception as e:
                logging.error(f"Error processing {pdf_link}: {e}")

    # Recursively crawl other links
    other_links_copy = other_links.copy()
    for other_link in other_links_copy:
        if other_link not in visited_urls:
            visited_urls.add(other_link)
            logging.info(f"Crawling URL: {other_link}")
            new_pdf_links, new_other_links = extract_links(other_link, depth=1, max_depth=max_depth)
            pdf_links.update(new_pdf_links)  # Update original sets
            other_links.update(new_other_links)

            # Download newly found PDFs
            with ThreadPoolExecutor(max_workers=5) as executor:
                futures = {executor.submit(download_pdf, pdf_link): pdf_link for pdf_link in new_pdf_links}

                for future in as_completed(futures):
                    pdf_link = futures[future]
                    try:
                        future.result()  # Wait for the download to complete
                    except Exception as e:
                        logging.error(f"Error processing {pdf_link}: {e}")

if __name__ == "__main__":
    crawl_website(base_url)

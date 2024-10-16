import os
from PyPDF2 import PdfMerger

# Create a PdfMerger object
merger = PdfMerger()

# List all PDF files in the current directory
pdf_files = [f for f in os.listdir('.') if f.endswith('.pdf')]

# Check if there are PDF files to merge
if not pdf_files:
    print("No PDF files found in the current directory.")
else:
    # Add each PDF file to the merger
    for pdf in pdf_files:
        merger.append(pdf)
        print(f"Added: {pdf}")

    # Specify the name for the merged PDF
    merged_pdf_name = "merged.pdf"
    
    # Write out the merged PDF
    merger.write(merged_pdf_name)
    merger.close()

    print(f"Merged {len(pdf_files)} PDF files into {merged_pdf_name}.")

import os

def list_directory_structure(directory_path, output_file, indent=""):
    for item in os.listdir(directory_path):
        item_path = os.path.join(directory_path, item)
        if os.path.isdir(item_path):
            output_file.write(f"{indent}📂 {item}/\n")
            list_directory_structure(item_path, output_file, indent + "    ")
        else:
            output_file.write(f"{indent}📄 {item}\n")

# Get the current working directory
current_directory = os.getcwd()

# Define the output file path
output_file_path = "directory_structure.txt"

# Open the file and write the directory structure to it
with open(output_file_path, "w") as file:
    list_directory_structure(current_directory, file)

cd /home/akbar/Desktop/DBC/urmon-gov/src/images/media

# Counter variable
i=1

# Iterate over each file in the folder
for file in *; do
    # Check if the file is a regular file
    if [ -f "$file" ]; then
        # Get the file extension
        extension="${file##*.}"
        # Rename the file
        mv "$file" "media-$i.$extension"
        # Increment the counter
        ((i++))
    fi
done

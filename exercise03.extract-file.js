function extractFile(path) {
    let fileNameExtension = path.split('\\').pop();

    let lastDotIndex = fileNameExtension.lastIndexOf('.');

    let fileName = fileNameExtension.slice(0, lastDotIndex);
    let fileExtension = fileNameExtension.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
    

}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
// Download content to filename via browser
// Inputs:
//  content: Content to download
//  filename: Filename of downloaded file
//  contentType: 'text/json', 'text/text', or other MIME type
const download = function (content: TProcessed, filename: string) {
  const contentType = "text/csv";
  const contentArray = content.data.map((d) => d.join(","));
  const contentString = contentArray.join("\n");
  const headerString = content.header.join(",");
  const contentToDownload = headerString + "\n" + contentString;

  const a = document.createElement("a");
  const blob = new Blob([contentToDownload], { type: contentType });
  a.href = window.URL.createObjectURL(blob);
  a.download = filename;
  a.click();
};

export default download;

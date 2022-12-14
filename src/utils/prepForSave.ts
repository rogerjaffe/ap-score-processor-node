import { writeFileSync, existsSync, mkdirSync } from "fs";

const prepForSave = (content: TProcessed, type: string, outputPath: string) => {
  if (!existsSync(outputPath)) {
    mkdirSync(outputPath, { recursive: true });
  }
  const contentArray = content.data.map((d) => d.join(","));
  const contentString = contentArray.join("\n");
  const headerString = content.header.join(",");
  const contentToSave = headerString + "\n" + contentString;
  writeFileSync(outputPath + "/" + type + ".csv", contentToSave, {
    flag: "w",
    encoding: "utf-8",
  });
};

export default prepForSave;

const fs = require("fs");

const arg = JSON.parse(process.env.npm_config_argv).original.at(-1);
const filename = arg !== "new" ? arg : "temp";

const plantName = filename
  .split("-")
  .map((name) => `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`)
  .join(" ");
const data = `---
title: ${plantName}
slug: /plants/${filename}
title-image-name: "plants/${filename}.jpg"
---

import { Card } from "components/Card"
import { Image } from "components/Image"

<Card>
  <Image src="plants/${filename}.jpg" />
</Card>

<Card>

# ${plantName}

Sample text

</Card>`;

fs.writeFile(`./src/pages/plants/-${filename}.mdx`, data, (err) => {
  if (err) console.log(err);
  else {
    console.log(
      `File created successfully.
Don't forget to add an image in the images/plants directory that matches the title-image-name in your new file!`
    );
  }
});

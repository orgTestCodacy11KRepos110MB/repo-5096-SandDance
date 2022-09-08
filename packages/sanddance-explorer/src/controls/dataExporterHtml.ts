/*!
* Copyright (c) Microsoft Corporation.
* Licensed under the MIT License.
*/

export const embedHtml = (title: string, embed: string) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" type="text/css"
        href="https://unpkg.com/@msrvida/sanddance-embed@4/dist/css/sanddance-embed.css" />
    <link rel="stylesheet" type="text/css"
        href="https://unpkg.com/@msrvida/sanddance-explorer@4/dist/css/sanddance-explorer.css" />
</head>

<body>
    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/vega@5.22/build/vega.min.js"></script>
    <script src="https://unpkg.com/@fluentui/react@8/dist/fluentui-react.js"></script>
    <script src="https://unpkg.com/@msrvida/sanddance-explorer@4/dist/umd/sanddance-explorer.js"></script>
    <script src="https://unpkg.com/@msrvida/sanddance-embed@4/dist/umd/sanddance-embed.js"></script>

    <div id="app"></div>

    ${embed}

</body>

</html>`;
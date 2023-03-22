import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                      rel="stylesheet"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </Head>
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: 'Roboto', sans-serif;
                    }
                `}
            </style>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

import Head from "next/head";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" title="Bryan Stapleton">
      <title>Bryan Stapleton</title>
      <head>
        <meta
          name="description"
          content="Hourglass is an application that saves you time by providing a location-enabled service to find, join, track and manage your events, anywhere you go."
        />
        <meta name="title" content="Bryan Stapleton"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

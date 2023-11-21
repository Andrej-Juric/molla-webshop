import Providers from "@modules/providers"
import "../../public/scss/style.scss"
import Script from "next/script"
import "../../public/css/bootstrap.min.css"
// import "public/css/bootstrap.min.css"
// import "../../public/vendor/line-awesome/css/line-awesome.min.css"
import "../../public/css/fonts-molla.min.css"
import "styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
        <Script src="js/jquery.min.js"></Script>
      </body>
    </html>
  )
}

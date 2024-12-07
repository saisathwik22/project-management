import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JiraX",
  description: "Project management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {/* header */}
          <Header />
          <main className='min-h-screen'>{children}</main>
          <footer className='bg-blue-950 py-12'>
            <div className='container mx-auto px-4 text-center text-gray-200'>
              <p>Made by Sai Sathwik Reddy</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

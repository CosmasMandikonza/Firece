import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import "./globals.css";

export const metadata = {
  title: "Fierce",
  description: "LA Fire Alleviation AI Agent",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CopilotKit
          agent="fireguard_agent"
          showDevConsole={false}
          publicApiKey="<ck_pub_932e3cbd78a26a0caf17e480b9b1131a>"
        >
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}

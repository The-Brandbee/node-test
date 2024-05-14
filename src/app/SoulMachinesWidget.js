import { useEffect } from "react";
import Script from "next/script";

const SoulMachinesWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.soulmachines.com/widget-snippet-1.12.0.min.js";
    script.setAttribute(
      "data-sm-api-key",
      "eyJzb3VsSWQiOiJkZG5hLWNzcC1nbG9iYWxhZDhjLS1leHBsb3JlciIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzA2N2NjOTRlLTM5MjYtNDlhNC1iMDVjLTU1YzhiYWU3MjkxNCJ9"
    ); // Replace YOUR_API_KEY with your actual API key
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default SoulMachinesWidget;

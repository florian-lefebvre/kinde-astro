import { APIRoute } from "astro";
import { createAuthUrl } from "../urls.js";
import config from "virtual:kinde-integration/config";

// Redirects to the registration URL with appropriate OAuth parameters
export const POST: APIRoute = async ({ redirect }) => {
    const registerUrl = createAuthUrl({ ...config, prompt: "create" });
    return redirect(registerUrl);
};
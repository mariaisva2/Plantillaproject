import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
    const cookieStore = cookies()
    const locale:string = cookieStore.get("locale")?.value || "en"
    return {
        locale,
        messages: (await import (`../../massages/${locale}.json`)).default
    }
})
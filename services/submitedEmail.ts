import { fetchAPI } from "@/lib/api";

export async function submitEmail(data:{
    email: string;
}){
    return fetchAPI("/api/email-forms", {
        method: "POST",
        body: JSON.stringify({
                email: data.email,   
        })
    })
}
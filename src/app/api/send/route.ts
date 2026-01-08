import { Resend } from 'resend';
import { EmailTemplate } from "@/app/[locale]/contact/_components/EmailTemplate";


const resend = new Resend(process.env.RESEND_API_KEY);


// Need to fix this here 


export async function POST(request:Request){
    
    
    const body = await request.json();

    console.log(body)
    // const { } = body;

    try {
        const { data, error } = await resend.emails.send({
            from: "FEMEX <onboarding@resend.dev>",
            to: "m7moooud.17@gmail.com",
            subject: "Hello From FEMEX!",
            react: EmailTemplate({ userName: "Mahmoud" })
        });

        if (error) {
            return Response.json({ error }, {status:500});
        };

        return Response.json({data});

    } catch (error) {
        // console.error("FULL ERROR LOG:", error); 
        return Response.json({ message:"Something went wrong!", detail:error }, { status: 404 });
    }
};
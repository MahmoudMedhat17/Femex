
interface EmailTemplateProps {
    userName: string;
}

export function EmailTemplate({ userName }: EmailTemplateProps) {
    return (
        <div>
            <h1>Welcome, {userName}!</h1>
        </div>
    );
}
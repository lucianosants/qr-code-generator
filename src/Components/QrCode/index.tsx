import { useState } from "react";

import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

import { Button, Input, Wrapper } from "./styled";

export default function QrCode() {
    const [link, setLink] = useState('');
    const [qrCodeLink, setQrCodeLink] = useState('');
    
    const handleGenerate = (link_url: string) => {
        QRCodeLink.toDataURL(link_url, {
            width: 600,
            margin: 3,
        }, (err, url) => {
            setQrCodeLink(url);
        })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
        handleGenerate(e.target.value);
    };

    return (
        <Wrapper>
            <QRCode value={link} />

            <h4>Gere um QR Code de um link e compartilhe-o com todos.</h4>

            <Input 
             type="text" 
             placeholder="Digite seu link..." 
             onChange={handleChange}
            />

            <Button href={qrCodeLink} download={`qrcode.png`}>Baixar</Button>
        </Wrapper>
    );
};
"use client";

import { Button } from './Button';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
    title: string;
    excerpt: string;
}

export function ShareButton({ title, excerpt }: ShareButtonProps) {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: excerpt,
                url: window.location.href,
            }).catch(() => {});
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <Button 
            variant="outline" 
            className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
            onClick={handleShare}
        >
            <Share2 className="w-4 h-4 mr-2" />
            Share Article
        </Button>
    );
}


'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface TestimonialAuthor {
  name: string;
  initials: string;
  role: string;
  avatar?: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Card = href ? 'a' : 'div';

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        'flex flex-col rounded-xl border border-border',
        'bg-surface/40',
        'p-5 sm:p-6 text-start',
        'hover:bg-surface/60 hover:border-cta/30',
        'w-[300px] sm:w-[320px] flex-shrink-0',
        'transition-colors duration-300',
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-11 w-11">
          {author.avatar && <AvatarImage src={author.avatar} alt={author.name} />}
          <AvatarFallback className="bg-gradient-to-br from-cta to-accent text-background font-bold text-sm">
            {author.initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold text-foreground leading-none mb-1">
            {author.name}
          </h3>
          <p className="text-xs text-muted">{author.role}</p>
        </div>
      </div>
      <p className="text-sm text-muted leading-relaxed italic">
        &ldquo;{text}&rdquo;
      </p>
    </Card>
  );
}

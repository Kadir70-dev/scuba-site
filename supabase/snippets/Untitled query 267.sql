create table hero_content (
  id uuid default gen_random_uuid() primary key,
  title text,
  subtitle text,
  description text,
  price numeric,
  old_price numeric,
  updated_at timestamp default now()
);

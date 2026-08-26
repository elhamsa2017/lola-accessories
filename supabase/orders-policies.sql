-- Run this in the Supabase SQL Editor after creating public.orders.

create table if not exists public.orders (
    id text primary key,
    customer text,
    phone text,
    address text,
    governorate text,
    items integer,
    amount numeric,
    shipping numeric,
    status text default 'Pending',
    raw_items jsonb,
    date text,
    created_at timestamptz default now()
);

alter table public.orders add column if not exists customer text;
alter table public.orders add column if not exists customer_name text;
alter table public.orders add column if not exists id text;
alter table public.orders add column if not exists phone text;
alter table public.orders add column if not exists address text;
alter table public.orders add column if not exists governorate text;
alter table public.orders add column if not exists items integer;
alter table public.orders add column if not exists amount numeric;
alter table public.orders add column if not exists total numeric;
alter table public.orders add column if not exists shipping numeric;
alter table public.orders add column if not exists status text default 'Pending';
alter table public.orders add column if not exists raw_items jsonb;
alter table public.orders add column if not exists date text;
alter table public.orders add column if not exists created_at timestamptz default now();
alter table public.orders drop column if exists user_id;

alter table public.orders enable row level security;

drop policy if exists "Anyone can create orders" on public.orders;
drop policy if exists "Admins can read orders" on public.orders;
drop policy if exists "Admins can update orders" on public.orders;

create policy "Anyone can create orders"
on public.orders
for insert
to anon, authenticated
with check (true);

create policy "Admins can read orders"
on public.orders
for select
to authenticated
using (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

create policy "Admins can update orders"
on public.orders
for update
to authenticated
using (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
)
with check (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
);

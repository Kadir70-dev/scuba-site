select table_name 
from information_schema.tables 
where table_schema = 'public';
select column_name 
from information_schema.columns 
where table_name = 'profiles';
alter table profiles
add column role text default 'user';

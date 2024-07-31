use db_20;
create table todo (
id int auto_increment primary key not null,
title  varchar(255) not null,
done not null 
createdAt datetime not null default CURRENT_TIMESTAMP,
updatedAt datetime not null default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

)


desc todo;
    
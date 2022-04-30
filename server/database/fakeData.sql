INSERT INTO users(name, email, password, phone_number, location)
VALUES
('مصطفى قنوع','mostafaqanoo403@gmail.com', '025@$55235', 0559565562, 'غزة'),
('محمد الهبيل', 'mohamed403@gmail.com', '025@4$55235', 0555555555, 'الامن العام'),
(' محمد عبدالهادي', 'abed403@gmail.com', '025@24$552335', 0555356555, 'الرياض'),
('اسراء ابوريا', 'israa403@gmail.com', '025@1$255235', 0555543555, 'الشارع التالت'),
('جهاد ابوشقرة', 'jehad403@gmail.com', '025@98$55235', 0552455555, 'خانيونس');

INSERT INTO categories(name, description, image)
VALUES
('تنظيف منازل',
'يجب علينا دائما أن نتواجد في مكان نظيف ومرتب لذلك نتوقع دائما أن يكون منزلك بهذا الشكل ونتفهم أيضًا أنه قد لا يكون لديك دائمًا الوقت للقيام بذلك بنفسك أو قد لاتكون لديك الصحة للتنظيف. لذلك لدينا فريق مهني لضمان حصولك على منزل نظيف بما يرضيك.
ما عليك سوى التقديم للاستفادة من خدماتنا',
'https://media.istockphoto.com/photos/the-countdown-to-clean-shiny-floors-picture-id1291180143?b=1&k=20&m=1291180143&s=170667a&w=0&h=Fc66R5Pn_Gs2K1XSKrwqX49aPmVwqINbY_oKqBh5IRo='),
('تنظيف السجاد',
'ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج مجهود عضلي ونتوقع أيضا عدم وجود وقت كافي لدى الرجال للقيام بهذه المهمة لذلك لدينا فريق مهني مدرب لتنظيف جميع أنواع السجاد و بأحجامه المختلفة.
ما عليك سوى التقديم للاستفادة من خدماتنا',
'https://media.istockphoto.com/photos/worker-removing-dirt-from-carpet-indoors-closeup-cleaning-service-picture-id1350817454?b=1&k=20&m=1350817454&s=170667a&w=0&h=zA7ymYDnadILctcL-ZlIGNtWdAlUckoN-rvZSpIPpBs='),
('تنظيف السيارات',
'نعرف أن الانتظار طويلا في محطات البنزين لغسيل السيارة الخاصة بك تعمل على تضيع الوقت منك لذلك عملنا على توفير فريق مهني مدرب لتوفير خدمة تنظيف السيارات حيث اذا كان لديك مكان للقيام بهذه الخدمة يأتي فريقنا اليك أو يأتي لأخذ السيارة وجلبها إليك في مدة معينة.
ما عليك سوى التقديم للاستفادة من خدماتنا',
'https://media.istockphoto.com/photos/the-car-wash-picture-id1128018249?b=1&k=20&m=1128018249&s=170667a&w=0&h=Jdq3AGdRlqwp72_pxUBthLrCPM6NKsfpp01tGD07s7w='),
('تنظيف المكاتب التجارية',
' يجب أن تظل المباني التجارية نظيفة لسببين مهمين - إنها المساحة التي يقضي فيها موظفوك جزءًا كبيرًا من يومهم ، وهي المكان الذي يأتي فيه العملاء والعملاء للتعامل معك. لهذه الأسباب ، تدرك شركتنا مدى أهمية نظافة الممتلكات التجارية الخاصة بك ، ولدينا المهنيين والمعدات لضمان حصولك على مستوى عالٍ من الخدمة.
ما عليك سوى التقديم للاستفادة من خدماتنا',
'https://media.istockphoto.com/photos/janitor-cleaning-white-desk-in-office-picture-id1335446686?b=1&k=20&m=1335446686&s=170667a&w=0&h=ZhA6qUvVi4rIIbd0Gq8Xtn80UUWSkxRfRe3H4OLjP3Y='),
('تنظيف الشبابيك',
'تدرك صعوبة القيام بتنظيف الشبابيك من قبل النساء في البيوت لأنها تحتاج مجهود عضلي ونتوقع أيضا عدم وجود وقت كافي لدى الرجال للقيام بهذه المهمة لذلك لدينا فريق مهني مدرب لتنظيف الشبابيك بأحجامها المختلفة.
ما عليك سوى التقديم للاستفادة من خدماتنا',
'https://media.istockphoto.com/photos/window-cleaner-using-a-squeegee-to-wash-a-window-picture-id1307939278?b=1&k=20&m=1307939278&s=170667a&w=0&h=sE2iIgtlr8gG6m6frJcxGZn-jz105dtqzoa_jucaTaA=');

INSERT INTO services(name, description, price, image, category_id)
VALUES
('غرفة النوم', 'ارضيات- سرير', 20, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 1),
('غرفة المعيشة', 'ارضيات- كنب', 30, 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 1),
('المطبخ', 'ارضيات- جلي - تعزيل المطبخ', 40, 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 1),
('المكتب', 'ارضيات- مكتب', 15, 'https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80', 1),
('الحمام', 'ارضيات-بانيو-كلو على بعضو', 20, 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 1),
('الدرج', 'ارضيات', 27, 'https://images.unsplash.com/photo-1580911498851-4999ad5327b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',1),
('البلكونة', 'ارضيات', 15, 'https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 1),
('سجاد صغير', 'طول لا يتجاوز 1 متر', 10, 'https://images.unsplash.com/photo-1621700052663-f1170e9b26ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', 2),
('سجاد متوسط', 'طول ما بين 1 - 2 متر', 15, 'https://images.unsplash.com/photo-1597665863042-47e00964d899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 2),
('سجاد كبير', 'طول اكبر من 2 متر ', 20, 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80', 2),
('دراجة نارية', '', 17, 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 3),
('سيارة خاصة', 'تنظيف داخلي وخارجي', 20, 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80', 3),
('شاحنة', 'تنظيف داخلي وخارجي', 25, 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 3),
('باص', 'تنظيف داخلي وخارجي', 25, 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 3),
('شباك صغير', 'طوله لا يتجاوز 0.5 متر', 10, 'https://images.unsplash.com/photo-1646578264746-480cc7c7bf6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjB3aW5kb3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 5),
('شباك متوسط', 'طوله مابين 0.5 - 1.5 متر', 15, 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2luZG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 5),
('شباك صغير', 'طوله أكبر من 1.5متر', 20, 'https://images.unsplash.com/photo-1598578273217-940b4e49c8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFyZ2UlMjB3aW5kb3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 5),
('غرفة اجتماعات', '', 10, 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 4),
('الحمام', 'ارضيات-بانيو-كلو على بعضو', 20, 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 4),
('غرفة مكتب شخصية', '', 10, 'https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 4),
('المطبخ', 'ارضيات- جلي - تعزيل المطبخ', 40, 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 4),
('الدرج', 'ارضيات', 27, 'https://images.unsplash.com/photo-1580911498851-4999ad5327b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',4),
('الممرات', 'ارضيات', 27, 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',4);

INSERT INTO appoinments(date, time, time_created, price, user_id, service_id)
VALUES
('2017-03-14', '10:00', NOW(), 10, 1, 1);

INSERT INTO services_appoinments(quantity, appoinment_id, service_id)
VALUES
(2, 1, 1);

# Nuka-Cola
Данный сайт выполнен с использованием следующих технологий: Bootstrap, Vue.js, Animations.css.
Вся информация, отображаемая на страницах сайта может быть изменена из служебного кабинета. 
## Служебный кабинет
**Данная функция работает только в полной версии сайта.**

Служебный кабинет позволяет управлять контентом сайта. 
> Служебный кабинет реализован только для клиентской части, поэтому все изменения будут отображаться только на действующем клиенте. 
Данные сохраняются в LocalStorage при первом изменении и не удаляются при перезагрузке. 
Чтобы удалить старые данные необходимо выполнить очистку кеша.

Чтобы попасть в служебный кабинет необходимо: 
1. В подвала любой страницы сайта, нажать кнопку "Служ.";
2. Ввести логин и пароль:
   
   Логин: `admin`
   
   Пароль: `admin`
   
3. Нажать кнопку "Отправить".

Из личного кабинета возможно: 

- Добавление новых записей.

Чтобы добавить новую запись нужно ввести заголовок, текст записи и выбрать картинку.

**Внимание! Возможность загрузки картинки невозможна, ввиду отсутствия серверной части.**

- Удаление и редактирование записей и комментариев.

Чтобы удалить/изменить запись нужно выбрать заголовок или порядковый номер интересующей записи, затем исправить текст и нажать кнопку "Отправить" или удалить запись, нажав кнопку "Удалить".

Для просмотра и/или удаления комментариев, необходимо нажать на кнопку "Показать комментарии" и при желании, нажать кнопку "Удалить" около нужного комментария.

> Изменения контента видны на главной странице и странице новостей.
Изменения комментариев видны только на странице новостей.

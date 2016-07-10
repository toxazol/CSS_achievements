#### Шаблон для списка ачивок

[**Макет на github pages**](https://toxazol.github.io/CSS_achievements/)  
Также можно протестировать шаблон на [сохраненной странице](https://github.com/toxazol/CSS_achievements/blob/gh-pages/%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB%20%D0%94%D1%83%D1%80%D0%BE%D0%B2%20_%20%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5.htm)  
Павла Дурова в социальной сети ВКонтакте.

### Использование
```html
<link rel="stylesheet" href="achievements.css">
```
Также необходимо добавить
```html
<div id="container"></div>
``` 
в тело HTML.
### Описание
Для демонстрации скрипт [achievements.js](https://github.com/toxazol/CSS_achievements/blob/gh-pages/achievements.js) добавляет новую ачивку каждую секунду  и останавливается после десятой. На каждой ачивке присутствует номер, генерируемый CSS  (псевдокласс  ::before и counter/counter-increment).  
Внешний вид ачивок можно менять добавлением класса к DOM-элементам,  т.к. ачивки рендерятся исключительно средствами CSS.  
Можно также изменять размер ачивок и счетчика.
```css
.circ{
    width: 90px;
    height: 90px;
}
#container{
    font-size: 24px;
```
Растровые картинки (64x64) для демонстрации хранятся [здесь](https://github.com/toxazol/CSS_achievements/tree/gh-pages/images).  Поступающие ачивки образуют стек и выравнивается при помощи display: flex.  
Ачивки рендерятся поверх основного контента страницы.
```css
#container{
    z-index:10000;
}
```
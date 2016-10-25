var	my_news	=	[
    {
        author:	'Саша Печкин',
        text:	'В четверг, четвертого числа...'
    },
    {
        author:	'Просто	Вася',
        text:	'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author:	'Гость',
        text:	'Бесплатно.	Скачать. Лучший	сайт - http://localhost:3000'
    }
];

var News = React.createClass({
    render:	function()	{
        var data = this.props.data;
        var newsTemplate = data.map(function(item, index) {
            return (
                <div key={index}>
                   <p className="news_author">{item.author}</p>
                   <p className="news_text">{item.text}</p>
                </div>
            )
        });

        return	(
            <div className="news">
                {newsTemplate}
            </div>
        );
    }
});

var Comments = React.createClass({
    render:	function()	{
        return	(
            <div className="comments">
                Нет	новостей - комментировать нечего
            </div>
        );
    }
});
var App = React.createClass({
    render: function() {
        return (
           <div className="app">
               Компонент Арр!
               <News data = {my_news} /> {/*comment in jsx*/}
               <Comments />
           </div>
        );
    }
});

ReactDOM.render(
    <App />,
document.getElementById('root')
);
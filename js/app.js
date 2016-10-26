var	my_news	=	[
    {
        author:	'Саша Печкин',
        text:	'В четверг, четвертого числа...',
        bigText: 'Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.'
    },
    {
        author:	'Просто	Вася',
        text:	'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.'
    },
    {
        author:	'Гость',
        text:	'Бесплатно.	Скачать. Лучший	сайт - http://localhost:3000',
        bigText: 'Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.Какойто большой текст. Какойто большой текст.'
    }
];

var Article = React.createClass({
        propTypes: {
            data: React.PropTypes.shape({
                author: React.PropTypes.string.isRequired,
                text: React.PropTypes.string.isRequired,
                bigText: React.PropTypes.string.isRequired
            })
        },
        getInitialState: function() {
            return {
                visible: false
            };
        },
        readMoreClick: function(e) {
            e.preventDefault();
            this.setState({visible: true}, function() {
                alert('Состояние изменилось');
            });
        },
        render:	function()	{
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

        return	(
            <div className="article">
                <p className="news_author">{author}</p>
                <p className="news_text">{text}</p>
                <a href="#" onClick={this.readMoreClick}
                   className={'news_readmore ' + (visible ? 'none' : '')}>
                    Подробнее
                </a>
                <p className={'news_big-text '  + (visible ? '' : 'none')}>
                    {bigText}
                </p>
            </div>

        );
    }
});

var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    render:	function()	{
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data = {item}/>
                    </div>
                )
            });
        } else {
            newsTemplate = <p>К	сожалению новостей нет</p>
        }

        return	(
            <div className="news">
                {newsTemplate}
                <strong className={'news_count ' + (data.length > 0 ? '' : 'none')}>
                    Всего новостей: {data.length}
                </strong>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
           <div className="app">
               <h3>Новости</h3>
               <News data = {my_news} /> {/*comment in jsx*/}
           </div>
        );
    }
});

ReactDOM.render(
    <App />,
document.getElementById('root')
);
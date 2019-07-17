import React from 'react';
// get db info into graph
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
    return a - b;
}

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            colors: ['#424242']
        }
    }
    render() {
        const ratings = Object.values(this.props.ratingsBreakdown);
        ratings.reverse();
        return (
            <section>
                <Charts
                    data={[ratings]}
                    colors={'#424242'}
                    horizontal={true}
                />
            </section>
        );
    }
}

class Charts extends React.Component {
    render() {
        var self = this,
            data = this.props.data,
            layered = this.props.grouping === 'layered' ? true : false,
            stacked = this.props.grouping === 'stacked' ? true : false,
            max = 0;

        for (var i = data[0].length; i--;) {
            if (data[0][i] > max) {
                max = data[0][i];
            }
        }

        return (
            <section>
                <div className={'RVWSCharts' + (this.props.horizontal ? ' horizontal' : '')}>
                    {data.map(function (serie, serieIndex) {
                        var sortedSerie = serie.slice(0),
                            sum;

                        sum = serie.reduce(function (carry, current) {
                            return carry + current;
                        }, 0);
                        sortedSerie.sort(compareNumbers);

                        return (
                            <div className={'RVWSCharts--serie ' + (self.props.grouping)}
                                key={serieIndex}
                                style={{ height: self.props.height ? self.props.height : 'auto' }}
                            >
                                {serie.map(function (item, itemIndex) {
                                    var color = self.props.colors[itemIndex], style,
                                        size = item / sum * 100;
                                    style = {
                                        backgroundColor: '#f96301'
                                    };

                                    if (self.props.horizontal) {
                                        style['width'] = size + '%';
                                    } else {
                                        style['height'] = size + '%';
                                    }

                                    if (layered && !self.props.horizontal) {
                                        style['right'] = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
                                    }

                                    return (
                                        <section key={"chartBar" + itemIndex.toString()}>
                                                <span style={{ color: '#cccccc' }}>({item})</span>
                                            <div className= "RVWSbarContainer">
                                                    <div
                                                    className={'RVWSCharts--item ' + (self.props.grouping)}
                                                        style={style}
                                                        key={itemIndex}
                                                    >
                                                    </div>
                                                </div>
                                        </section>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <div className="RVWSstarsList">
								<ul>
                        <li>5<span className= "RVWSinnerStar"></span></li>
                        <li>4<span className= "RVWSinnerStar"></span></li>
                        <li>3<span className= "RVWSinnerStar"></span></li>
                        <li>2<span className= "RVWSinnerStar"></span></li>
                        <li>1<span className= "RVWSinnerStar"></span></li>
								</ul>
							</div>
            </section>
        );
    }
}

export default Graph;
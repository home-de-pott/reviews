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
    // componentDidMount() {
    //     this.populateArray();
    // }
    // populateArray() {
    //     var data = [],
    //         serieLength = 5;

    //     for (var i = 1; i--;) {
    //         var tmp = [];

    //         for (var j = serieLength; j--;) {
    //             tmp.push(getRandomInt(0, 20));
    //         }
    //         data.push(tmp);
    //     }

    //     this.setState({ data: data });
    // }i

    // consider changing to stateless
    // sort ratings by key value

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
            opaque = this.props.opaque,
            max = 0;

        for (var i = data[0].length; i--;) {
            if (data[0][i] > max) {
                max = data[0][i];
            }
        }


        return (
            <div className={'Charts' + (this.props.horizontal ? ' horizontal' : '')}>
                {data.map(function (serie, serieIndex) {
                    var sortedSerie = serie.slice(0),
                        sum;

                    sum = serie.reduce(function (carry, current) {
                        return carry + current;
                    }, 0);
                    sortedSerie.sort(compareNumbers);

                    return (
                        <div className={'Charts--serie ' + (self.props.grouping)}
                            key={serieIndex}
                            style={{ height: self.props.height ? self.props.height : 'auto' }}
                        >
                            {serie.map(function (item, itemIndex) {
                                var color = self.props.colors[itemIndex], style,
                                    size = item / (stacked ? sum : max) * 100;

                                style = {
                                    backgroundColor: '#f96301',
                                    zIndex: item
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
                                    <div
                                        className={'Charts--item ' + (self.props.grouping)}
                                        style={style}
                                        key={itemIndex}
                                    >
                                        <b style={{ color: color }}>{item}</b>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Graph;
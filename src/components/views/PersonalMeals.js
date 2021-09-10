import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Progress, Badge, Row, Col, List, Typography } from 'antd';

import styled from 'styled-components';

const WebContainer = styled.div`

`
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

@inject('appState', 'appStore')
@observer
class PersonalMeals extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const role = this.props.appState.getUserRole();

        console.log('roleee', role);

        return (
            <WebContainer>
                <List
                    header={<Typography.Text strong>Breakfast</Typography.Text>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
                <br />
                <List
                    header={<Typography.Text strong>Breakfast</Typography.Text>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
                <br />
                <List
                    header={<Typography.Text strong>Dinenr</Typography.Text>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </WebContainer>
        )
    }
}

export default PersonalMeals;

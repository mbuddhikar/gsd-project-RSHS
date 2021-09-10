import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
    Form, Select, Radio, Button, Input, Result, Row, Col, Modal, notification, DatePicker,
    Card, Breadcrumb, Typography, InputNumber
} from 'antd';

import moment from 'moment';

const { TextArea } = Input;
const FormItem = Form.Item;

const openNotificationWithIcon = (type, title, msg) => {
    notification[type]({
        placement: 'topRight',
        message: title,
        description: msg,
    });
}

@inject('appStore')
@observer
class AddMealdata extends Component {

    constructor(props) {
        super(props);

        this.state = { visible: false }
    }

    showModal = () => { this.setState({ visible: true }); }

    handleCancel = () => { this.setState({ visible: false, }); }

    handleOk = e => {
        this.props.form.validateFields((err, values) => {
            this.props.appStore.myDiary[values.date.date().toString()].push({
                "type": "warning",
                "content": values.meal
            });
            this.props.reRender();
            this.props.form.resetFields();
            this.handleCancel();
        });
    };

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { confirmLoading } = this.state;

        return (
            <div style={{ display: 'inline', marginRight: '5px' }}>
                <Button type="primary" icon="plus" onClick={this.showModal}>Add Meal</Button>
                <Modal
                    title="Add Meal"
                    okText="Add"
                    confirmLoading={confirmLoading}
                    visible={this.state.visible}
                    width={800}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <FormItem
                            label="Date"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 18 }}
                        >
                            {getFieldDecorator('date', {
                                rules: [{ required: true, message: 'Please input date' }]
                            })(
                                <DatePicker style={{ width: '260px' }} onChange={this.onChange} />
                            )}
                        </FormItem>

                        <FormItem
                            label="Meal"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 18 }}
                        >
                            {getFieldDecorator('meal', {
                                rules: [{ required: true, message: 'Please input meal' }]
                            })(
                                <TextArea rows={4} />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div >
        );
    }
}

const AddMeal = Form.create()(AddMealdata);

export default AddMeal;
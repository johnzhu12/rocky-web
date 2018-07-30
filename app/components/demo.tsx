//Greeter,js
import * as React from 'react';
import { DatePicker, Button } from 'antd'
import * as moment from 'moment'

interface DemoStates {
    startDate: string;
    endDate: string;
}
interface DemoProps {

}

class Demo extends React.Component<DemoProps, DemoStates> {
    cacheStartDate: string;
    cacheEndDate: string;
    constructor(props: DemoProps) {
        super(props)
        this.state = {
            startDate: '',
            endDate: ''
        }
        this.cacheStartDate = '';
        this.cacheEndDate = '';
    }

    choseStartDate(date, dateString) {
        if (dateString) {
            this.setState({ startDate: dateString })
            // this.cacheStartDate 
        }
    }
    choseEndDate(date, dateString) {
        if (dateString) {
            this.setState({ endDate: dateString })
            // this.cacheStartDate 
        }
    }
    submit() {

    }
    clear() {
        this.setState({
            startDate: '', endDate: ''
        })
    }
    render() {
        const startDateProps = {
            placeholder: "开始日期",
            onChange: this.choseStartDate.bind(this)
        }
        const endDateProps = {
            placeholder: "结束日期",
            onChange: this.choseEndDate.bind(this)
        }
        if (this.state.startDate) {
            startDateProps['value'] = moment(this.state.startDate, 'YYYY-MM-DD')
        } else if (this.state.startDate == '') {
            startDateProps['value'] = ''
        }
        if (this.state.endDate) {
            endDateProps['value'] = moment(this.state.endDate, 'YYYY-MM-DD')
        } else if (this.state.endDate == '') {
            endDateProps['value'] = ''
        }
        return (
            <div>
                <DatePicker {...startDateProps} />~
                <DatePicker {...endDateProps} />

                <div style={{ marginTop: '20px' }}>
                    <Button type="primary" onClick={this.submit.bind(this)}>点我</Button>
                    <Button type="primary" onClick={this.clear.bind(this)}>清空</Button>
                </div>

            </div >

        );
    }
}

export default Demo

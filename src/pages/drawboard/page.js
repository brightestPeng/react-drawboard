/**
 * Created by brightestPeng on 2018/4/2.
 */
import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import styles from './page.less';

const { Header,Sider,Content } = Layout;

const Index = ()=>{

    return(
        <Layout>
            <Header>这是头部</Header>
            <Layout>
                <Sider>工具栏</Sider>
                <Content>工具栏</Content>
            </Layout>
        </Layout>
    )
};

export default connect(({ drawboard })=>({ drawboard }))(Index);
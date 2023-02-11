import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';

interface Props {
  isShowFooter?: boolean;
  children: any;
}

const { Header, Content, Footer, Sider } = Layout;
const MyLayout: React.FC<Props> = (props) => {
  const { isShowFooter = false } = props;
  return (
    <Layout className={styles.layout}>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>
          {props.children}
        </Content>
        <Sider>right sidebar</Sider>
      </Layout>
      { isShowFooter && <Footer>footer</Footer> }
    </Layout>
  );
};

export default MyLayout;

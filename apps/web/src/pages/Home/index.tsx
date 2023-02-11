import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { MyLayout } from '@monorepo/module/components'
import { TEMPLATE_NAME } from '@monorepo/module/const'

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <MyLayout isShowFooter={true}>
          <div className={styles.content}>
            <h3>{TEMPLATE_NAME}</h3>
          </div>
        </MyLayout>
      </div>
    </PageContainer>
  );
};

export default HomePage;

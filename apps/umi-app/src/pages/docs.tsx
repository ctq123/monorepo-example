import { MyLayout } from '@monorepo/module/components'
import { TEMPLATE_NAME } from '@monorepo/module/const'
const DocsPage = () => {
  return (
    <div>
      <p>This is umi docs.</p>
      <MyLayout>
        {TEMPLATE_NAME}
      </MyLayout>
    </div>
  );
};

export default DocsPage;

import { MyLayout } from '@monorepo/module/components'
import { TEMPLATE_NAME } from '@monorepo/module/const'

export default function UserPage() {
  return (
    <MyLayout>
      <div>
        <h1>User Page</h1>
        <div>{TEMPLATE_NAME}</div>
      </div>
    </MyLayout>
  );
}

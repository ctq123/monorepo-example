import yayJpg from '../assets/yay.jpg';
import { formatTime } from '@monorepo/module/utils'

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
        <div>
          现在的时间是：{formatTime(new Date())}
        </div>
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}

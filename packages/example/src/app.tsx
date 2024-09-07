import ReactFadeImage from '@jswork/react-fade-image/src/main';
import '@jswork/react-fade-image/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <ReactFadeImage src="https://picsum.photos/id/237/400/1000" />
    </div>
  );
}

export default App;

export default function ProfileSection() {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Info</h2>
        <div className="space-y-3 text-gray-600">
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:phamdanh0305@gmail.com"
              className="text-blue-500 hover:underline"
            >
              phamdanh0305@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium">Phone:</span>{" "}
            <a href="tel:+84344858427" className="text-blue-500 hover:underline">
              +84 344 855 427
            </a>
          </p>
          <p>
            <span className="font-medium">GitHub:</span>{" "}
            <a
              href="https://github.com/danh-pham235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/danh-pham235
            </a>
          </p>
          <p>
            <span className="font-medium">Facebook:</span>{" "}
            <a
              href="https://www.facebook.com/danhpham.235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              facebook.com/danhpham.235
            </a>
          </p>
        </div>
      </div>
    );
  }
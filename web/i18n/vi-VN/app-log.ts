const translation = {
  title: 'Nhật ký',
  description: 'Nhật ký ghi lại trạng thái hoạt động của ứng dụng, bao gồm đầu vào của người dùng và phản hồi của trí tuệ nhân tạo.',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      updatedTime: 'Thời gian cập nhật',
      time: 'Thời gian tạo',
      endUser: 'Người dùng cuối hoặc tài khoản',
      input: 'Đầu vào',
      output: 'Đầu ra',
      summary: 'Tóm tắt',
      messageCount: 'Số lượng tin nhắn',
      userRate: 'Đánh giá người dùng',
      adminRate: 'Đánh giá quản trị viên',
      startTime: 'THỜI GIAN BẮT ĐẦU',
      status: 'TRẠNG THÁI',
      runtime: 'THỜI GIAN CHẠY',
      tokens: 'TOKEN',
      user: 'NGƯỜI DÙNG CUỐI HOẶC TÀI KHOẢN',
      version: 'PHIÊN BẢN',
    },
    pagination: {
      previous: 'Trước',
      next: 'Sau',
    },
    empty: {
      noChat: 'Chưa có cuộc trò chuyện',
      noOutput: 'Không có đầu ra',
      element: {
        title: 'Chưa có dữ liệu',
        content: 'Quan sát và chú thích các tương tác giữa người dùng cuối và ứng dụng trí tuệ nhân tạo ở đây để liên tục cải thiện độ chính xác của AI. Bạn có thể thử <shareLink>chia sẻ</shareLink> hoặc <testLink>kiểm tra</testLink> ứng dụng Web, sau đó quay lại trang này.',
      },
    },
  },
  detail: {
    time: 'Thời gian',
    conversationId: 'ID cuộc trò chuyện',
    promptTemplate: 'Mẫu lời nhắc',
    promptTemplateBeforeChat: 'Mẫu lời nhắc trước trò chuyện · Tin nhắn hệ thống',
    annotationTip: 'Cải thiện được đánh dấu bởi {{user}}',
    timeConsuming: '',
    second: 'giây',
    tokenCost: 'Chi phí token',
    loading: 'Đang tải',
    operation: {
      like: 'Thích',
      dislike: 'Không thích',
      addAnnotation: 'Thêm chú thích',
      editAnnotation: 'Chỉnh sửa chú thích',
      annotationPlaceholder: 'Nhập câu trả lời mong muốn từ AI. Điều này sẽ được sử dụng để điều chỉnh mô hình và cải thiện chất lượng sinh văn bản trong tương lai.',
    },
    variables: 'Biến',
    uploadImages: 'Ảnh đã tải lên',
  },
  filter: {
    period: {
      today: 'Hôm nay',
      last7days: '7 ngày qua',
      last4weeks: '4 tuần qua',
      last3months: '3 tháng qua',
      last12months: '12 tháng qua',
      monthToDate: 'Tháng hiện tại',
      quarterToDate: 'Quý hiện tại',
      yearToDate: 'Năm hiện tại',
      allTime: 'Tất cả thời gian',
    },
    annotation: {
      all: 'Tất cả',
      annotated: 'Đã chú thích ({{count}} mục)',
      not_annotated: 'Chưa chú thích',
    },
    sortBy: 'Sắp xếp theo:',
    descending: 'giảm dần',
    ascending: 'tăng dần',
  },
  workflowTitle: 'Nhật ký quy trình làm việc',
  workflowSubtitle: 'Nhật ký ghi lại hoạt động của Tự động hóa.',
  runDetail: {
    title: 'Nhật ký cuộc trò chuyện',
    workflowTitle: 'Chi tiết nhật ký',
    fileListDetail: 'Chi tiết',
    fileListLabel: 'Chi tiết tệp',
  },
  promptLog: 'Nhật ký lời nhắc',
  AgentLog: 'Nhật ký tác nhân',
  viewLog: 'Xem nhật ký',
  agentLogDetail: {
    AgentMode: 'Chế độ tác nhân',
    toolUsed: 'Công cụ đã sử dụng',
    iterations: 'Số lần lặp',
    iteration: 'Lần lặp',
    finalProcessing: 'Xử lý cuối cùng',
    agentMode: 'Chế độ đại lý',
  },
  agentLog: 'Nhật ký đại lý',
}

export default translation

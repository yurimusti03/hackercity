import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Sora, sans-serif;
  }

  html {
    scroll-behavior: smooth;

  .ant-modal-root {

    .ant-modal-wrap {
      border-radius: 20px;

      .ant-modal-content {
        border-radius: 20px;
        background-color: #009acf;

        .ant-modal-header {
          text-align: center;
          background-color: #009acf;
          padding: 20px 50px;
          border-radius: 20px;
          border-bottom: 0px;
          
          .ant-modal-title {
            color: #fff;
            font-weight: bold;
            font-size: 16px;
            margin-top: 30px;
          }
        }

        .ant-modal-footer {
          border-top: 0px;
          margin-top: 20px;

          .ant-btn {
            border-radius: 5px;
            background-color: #00000047;
            border-color: #00000010;
            color: #ffffff90;

            :hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

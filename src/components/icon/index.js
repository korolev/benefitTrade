import React, { Component } from 'react'

class Icon extends Component {
  static propTypes = {}

  render() {
    switch (this.props.type) {
      case 'profile':
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.81118 6.11115C6.81118 4.34914 8.23806 2.92226 10.0001 2.92226C11.7621 2.92226 13.189 4.34914 13.189 6.11115C13.189 7.87316 11.7621 9.30004 10.0001 9.30004C8.23806 9.30004 6.81118 7.87316 6.81118 6.11115ZM2.92229 14.8611C2.92229 14.4717 3.11181 14.0788 3.54729 13.6769C3.98752 13.2706 4.63079 12.9041 5.39805 12.5967C6.9337 11.9815 8.78966 11.6723 10.0001 11.6723C11.2105 11.6723 13.0664 11.9815 14.6021 12.5967C15.3693 12.9041 16.0126 13.2706 16.4528 13.6769C16.8883 14.0788 17.0778 14.4717 17.0778 14.8611V17.0778H2.92229V14.8611Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
            />
          </svg>
        )
      case 'buyers':
        return (
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.49996 1.2H15.6666C15.7384 1.2 15.8 1.2616 15.8 1.33333V6.33333C15.8 6.40507 15.7384 6.46667 15.6666 6.46667H1.49996C1.42823 6.46667 1.36663 6.40507 1.36663 6.33333V1.33333C1.36663 1.2616 1.42823 1.2 1.49996 1.2ZM1.49996 9.53333H15.6666C15.7384 9.53333 15.8 9.59493 15.8 9.66667V14.6667C15.8 14.7384 15.7384 14.8 15.6666 14.8H1.49996C1.42823 14.8 1.36663 14.7384 1.36663 14.6667V9.66667C1.36663 9.59493 1.42823 9.53333 1.49996 9.53333Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
            />
          </svg>
        )
      case 'notification':
        return (
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3 14V14.2899L13.505 14.495L15.3 16.29V16.3H0.7V16.2899L2.49497 14.495L2.7 14.2899V14V9C2.7 6.16412 4.17906 3.94929 6.66139 3.36114L7.2 3.23353V2.68V2C7.2 1.5566 7.5566 1.2 8 1.2C8.4434 1.2 8.8 1.5566 8.8 2V2.68V3.23308L9.33808 3.36102C11.8114 3.94907 13.3 6.17474 13.3 9V14ZM9.0932 18.7C8.861 19.0599 8.45646 19.3 8 19.3C7.53817 19.3 7.13468 19.0603 6.90423 18.7H9.0932Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
            />
          </svg>
        )
      case 'orders':
        return (
          <svg
            width="17"
            height="18"
            className="orders"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 15.9342V8.38058L15.4286 6.04018V12.4286L9 15.9342ZM8.35714 7.24554L1.34598 4.6942L8.35714 2.14286L15.3683 4.6942L8.35714 7.24554ZM16.7143 4.71429C16.7143 4.17188 16.3728 3.68973 15.8705 3.50893L8.79911 0.937499C8.65848 0.887276 8.50781 0.857142 8.35714 0.857142C8.20647 0.857142 8.0558 0.887276 7.91518 0.937499L0.84375 3.50893C0.341518 3.68973 0 4.17188 0 4.71429V12.4286C0 12.9007 0.261161 13.3326 0.672991 13.5536L7.74442 17.4107C7.93527 17.5212 8.14621 17.5714 8.35714 17.5714C8.56808 17.5714 8.77902 17.5212 8.96987 17.4107L16.0413 13.5536C16.4531 13.3326 16.7143 12.9007 16.7143 12.4286V4.71429Z"
              stroke="#C2CFE0"
              fill="#C2CFE0"
            />
          </svg>
        )
      case 'find-buyer':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8.13333C1.33431 8.13333 1.2 7.99902 1.2 7.83333V1.5C1.2 1.33431 1.33431 1.2 1.5 1.2H6.16667C6.33235 1.2 6.46667 1.33431 6.46667 1.5V7.83333C6.46667 7.99902 6.33235 8.13333 6.16667 8.13333H1.5ZM1.5 14.8C1.33431 14.8 1.2 14.6657 1.2 14.5V11.5C1.2 11.3343 1.33431 11.2 1.5 11.2H6.16667C6.33235 11.2 6.46667 11.3343 6.46667 11.5V14.5C6.46667 14.6657 6.33235 14.8 6.16667 14.8H1.5ZM9.83333 14.8C9.66765 14.8 9.53333 14.6657 9.53333 14.5V8.16667C9.53333 8.00098 9.66765 7.86667 9.83333 7.86667H14.5C14.6657 7.86667 14.8 8.00098 14.8 8.16667V14.5C14.8 14.6657 14.6657 14.8 14.5 14.8H9.83333ZM9.53333 1.5C9.53333 1.33431 9.66765 1.2 9.83333 1.2H14.5C14.6657 1.2 14.8 1.33431 14.8 1.5V4.5C14.8 4.66569 14.6657 4.8 14.5 4.8H9.83333C9.66765 4.8 9.53333 4.66569 9.53333 4.5V1.5Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
            />
          </svg>
        )
      case 'more':
        return (
          <svg
            width="14"
            height="4"
            viewBox="0 0 14 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00004 0.333328C1.08337 0.333328 0.333374 1.08333 0.333374 1.99999C0.333374 2.91666 1.08337 3.66666 2.00004 3.66666C2.91671 3.66666 3.66671 2.91666 3.66671 1.99999C3.66671 1.08333 2.91671 0.333328 2.00004 0.333328ZM12 0.333328C11.0834 0.333328 10.3334 1.08333 10.3334 1.99999C10.3334 2.91666 11.0834 3.66666 12 3.66666C12.9167 3.66666 13.6667 2.91666 13.6667 1.99999C13.6667 1.08333 12.9167 0.333328 12 0.333328ZM7.00004 0.333328C6.08337 0.333328 5.33337 1.08333 5.33337 1.99999C5.33337 2.91666 6.08337 3.66666 7.00004 3.66666C7.91671 3.66666 8.66671 2.91666 8.66671 1.99999C8.66671 1.08333 7.91671 0.333328 7.00004 0.333328Z"
              fill="#C2CFE0"
              stroke="#C2CFE0"
            />
          </svg>
        )
      case 'pencil':
        return (
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.5V13H2.5L9.87333 5.62664L7.37333 3.12664L0 10.5ZM11.8067 3.69331C12.0667 3.43331 12.0667 3.01331 11.8067 2.75331L10.2467 1.19331C9.98667 0.933306 9.56667 0.933306 9.30667 1.19331L8.08667 2.41331L10.5867 4.91331L11.8067 3.69331Z"
              fill="#334D6E"
            />
          </svg>
        )
      case 'rateStar':
        return (
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.67738 5.13368H1.5437L4.75879 8.34877L3.38089 12.9417L7.51458 10.186L11.189 12.9417L9.81106 8.34877L13.4854 5.13368H8.89247L7.51458 1L5.67738 5.13368Z"
              stroke="#C2CFE0"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        )
      case 'search':
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z"
              fill="#C2CFE0"
            />
          </svg>
        )
      case 'star':
        return (
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.87054 4.2606L10.0349 3.27421L10.0247 3.2725L10.0144 3.27101L9.87054 4.2606ZM6.78906 3.8125L5.89267 4.25577L6.12546 4.72652L6.64516 4.80209L6.78906 3.8125ZM5.40792 1.01953L4.50419 1.44762L4.5078 1.45524L4.51154 1.4628L5.40792 1.01953ZM4.80636 1.01953L5.70275 1.4628L5.70649 1.45524L5.7101 1.44762L4.80636 1.01953ZM3.42522 3.8125L3.56913 4.80209L4.08882 4.72652L4.32161 4.25577L3.42522 3.8125ZM0.34375 4.2606L0.199845 3.27101L0.192793 3.27204L0.185756 3.27316L0.34375 4.2606ZM0.15346 4.83761L-0.581344 5.51589L-0.563058 5.5357L-0.543731 5.5545L0.15346 4.83761ZM2.38783 7.0106L3.37336 7.18011L3.46266 6.66097L3.08503 6.29372L2.38783 7.0106ZM1.85993 10.0798L0.874405 9.91029L0.871994 9.9243L0.869984 9.93838L1.85993 10.0798ZM2.351 10.4358L1.88572 9.55061L1.8769 9.55536L2.351 10.4358ZM5.10714 8.98717L5.5724 8.10199L5.10714 7.85744L4.64188 8.10199L5.10714 8.98717ZM7.86328 10.4358L8.36715 9.57205L8.34808 9.56092L8.32854 9.55065L7.86328 10.4358ZM8.35435 10.0798L9.3443 9.93837L9.34229 9.9243L9.33988 9.91029L8.35435 10.0798ZM7.82645 7.0106L7.12828 6.29468L6.75178 6.66184L6.84092 7.18011L7.82645 7.0106ZM10.0547 4.83761L10.7529 5.55359L10.7618 5.54472L10.0547 4.83761ZM11.2143 4.54297C11.2143 4.02351 10.9105 3.67999 10.648 3.50698C10.4156 3.35381 10.1749 3.29754 10.0349 3.27421L9.70613 5.247C9.70056 5.24607 9.68695 5.24355 9.66599 5.23646C9.64674 5.22995 9.60269 5.21337 9.54734 5.17689C9.4914 5.14002 9.40569 5.07057 9.33302 4.95417C9.25522 4.82955 9.21429 4.68538 9.21429 4.54297H11.2143ZM10.0144 3.27101L6.93297 2.82291L6.64516 4.80209L9.72663 5.25019L10.0144 3.27101ZM7.68545 3.36923L6.30431 0.576262L4.51154 1.4628L5.89267 4.25577L7.68545 3.36923ZM6.31166 0.591444C6.24939 0.459984 6.14518 0.284048 5.98024 0.126602C5.81322 -0.0328173 5.51731 -0.232143 5.10714 -0.232143V1.76786C4.83816 1.76786 4.66501 1.63605 4.59929 1.57331C4.53562 1.51255 4.51121 1.46245 4.50419 1.44762L6.31166 0.591444ZM5.10714 -0.232143C4.69698 -0.232143 4.40106 -0.0328173 4.23405 0.126602C4.06911 0.284048 3.9649 0.459984 3.90262 0.591444L5.7101 1.44762C5.70307 1.46245 5.67866 1.51255 5.615 1.57331C5.54927 1.63605 5.37613 1.76786 5.10714 1.76786V-0.232143ZM3.90997 0.576262L2.52883 3.36923L4.32161 4.25577L5.70275 1.4628L3.90997 0.576262ZM3.28132 2.82291L0.199845 3.27101L0.487655 5.25019L3.56913 4.80209L3.28132 2.82291ZM0.185756 3.27316C0.0412285 3.29629 -0.204372 3.35255 -0.440373 3.50989C-0.710912 3.69025 -1 4.03603 -1 4.54297H1C1 4.67891 0.962182 4.82018 0.8859 4.94526C0.81411 5.06299 0.727946 5.13471 0.669028 5.17399C0.611198 5.21254 0.564601 5.23012 0.543602 5.23717C0.520965 5.24477 0.506552 5.24727 0.501744 5.24804L0.185756 3.27316ZM-1 4.54297C-1 4.83785 -0.89511 5.06808 -0.81419 5.2065C-0.731993 5.3471 -0.638183 5.45432 -0.581344 5.51589L0.888264 4.15933C0.871442 4.14111 0.888522 4.15625 0.912404 4.1971C0.935009 4.23577 1 4.35858 1 4.54297H-1ZM-0.543731 5.5545L1.69064 7.72749L3.08503 6.29372L0.850651 4.12073L-0.543731 5.5545ZM1.40231 6.84109L0.874405 9.91029L2.84546 10.2493L3.37336 7.18011L1.40231 6.84109ZM0.869984 9.93838C0.868021 9.95212 0.847656 10.0717 0.847656 10.2026H2.84766C2.84766 10.2159 2.84717 10.2276 2.84654 10.2372C2.84592 10.2466 2.8452 10.2532 2.8449 10.2558C2.84465 10.258 2.84467 10.2575 2.84556 10.2512C2.846 10.2481 2.84651 10.2445 2.84727 10.2393C2.84796 10.2346 2.84892 10.228 2.84988 10.2212L0.869984 9.93838ZM0.847656 10.2026C0.847656 10.4318 0.902622 10.7371 1.10721 11.0124C1.33897 11.3242 1.70166 11.5095 2.10547 11.5095V9.50949C2.20217 9.50949 2.31938 9.53041 2.43835 9.59007C2.55698 9.64956 2.64819 9.73295 2.7124 9.81935C2.83259 9.98106 2.84766 10.1329 2.84766 10.2026H0.847656ZM2.10547 11.5095C2.43308 11.5095 2.68598 11.3912 2.8251 11.3163L1.8769 9.55536C1.85643 9.56638 1.94974 9.50949 2.10547 9.50949V11.5095ZM2.81626 11.321L5.5724 9.87234L4.64188 8.10199L1.88575 9.55065L2.81626 11.321ZM4.64188 9.87234L7.39802 11.321L8.32854 9.55065L5.5724 8.10199L4.64188 9.87234ZM7.35941 11.2996C7.53346 11.4011 7.79356 11.5095 8.10882 11.5095V9.50949C8.18408 9.50949 8.24296 9.52271 8.28173 9.53492C8.32061 9.54716 8.34871 9.56129 8.36715 9.57205L7.35941 11.2996ZM8.10882 11.5095C8.5164 11.5095 8.88367 11.3203 9.1144 10.9982C9.31403 10.7194 9.36049 10.4163 9.36049 10.2026H7.36049C7.36049 10.1484 7.37012 9.99877 7.48842 9.8336C7.55251 9.74411 7.64546 9.65616 7.76855 9.59332C7.89171 9.53045 8.01214 9.50949 8.10882 9.50949V11.5095ZM9.36049 10.2026C9.36049 10.1657 9.36187 10.0614 9.3443 9.93837L7.3644 10.2212C7.36308 10.212 7.36214 10.2033 7.36149 10.1957C7.36085 10.1881 7.36057 10.1825 7.36046 10.1796C7.36036 10.177 7.3604 10.1768 7.36044 10.1807C7.36046 10.1827 7.36047 10.1853 7.36048 10.189C7.36049 10.1929 7.36049 10.197 7.36049 10.2026H9.36049ZM9.33988 9.91029L8.81198 6.84109L6.84092 7.18011L7.36882 10.2493L9.33988 9.91029ZM8.52463 7.72653L10.7529 5.55354L9.35651 4.12169L7.12828 6.29468L8.52463 7.72653ZM10.7618 5.54472C10.8521 5.45441 11.2143 5.09314 11.2143 4.54297H9.21429C9.21429 4.35725 9.28004 4.23209 9.30692 4.1873C9.3349 4.14067 9.35648 4.12161 9.34758 4.13051L10.7618 5.54472Z" />
          </svg>
        )
      default:
        return ''
    }
  }
}

export default Icon

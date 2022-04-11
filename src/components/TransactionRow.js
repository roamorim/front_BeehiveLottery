import './Components.css';

export default function TransactionRow() {
    return (
        <div class="row">
            <div class="tx-dot-container" >
                <span class="tx-dot" >Tx</span>
            </div>
            <div class="tx-content-container">
                <p class="content-address">0x00cd07d9f827583ac3277b087adcc17669b87eb45280740884583770840f0e14
                </p>
                <p class="content-ticket">Ticket ID: 54578965585dhjsh2</p>
            </div>
            <div class="content-prize" >
                <span>$24 MTR</span>
            </div>
            <div class="content-status-container" >
                <span class="content-status">PAID</span>
            </div>
            <div class="content-date">
                <span>SEP 12, 2019</span>
            </div>
        </div>
    );
}


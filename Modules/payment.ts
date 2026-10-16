export function calculateTotal(amount: number, fee: number): number {
  return amount + fee;
}

export function makePayment(amount: number): void {
  console.log(`Payment of $${amount} completed.`);
}

export function refundPayment(amount: number): void {
  console.log(`Refund of $${amount} issued.`);
}

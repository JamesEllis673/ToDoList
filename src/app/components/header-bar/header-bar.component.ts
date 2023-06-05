import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent {
  @Output()
  public onSave: EventEmitter<void> = new EventEmitter<void>();

  public closeModal(save: boolean) {
    const modal: HTMLDialogElement = document.getElementById('addItemModal') as HTMLDialogElement;

    modal.close();

    if (save) {
      this.onSave.emit();
    }
  }

  public showModal(): void {
    const modal: HTMLDialogElement = document.getElementById('addItemModal') as HTMLDialogElement;

    modal.showModal();
  }
}

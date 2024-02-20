import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  @Input() items: any;
  @Input() columns: any;
  @Input() count: any;
  @Input() total: any;
  @Output() onSelect = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onLoadMore = new EventEmitter();

  selectItem(item: any) {
    this.onSelect.emit(item.id);
  }

  edit(item: any) {
    this.onEdit.emit(item.id);
  }

  delete(item: any) {
    if (confirm(`Are you sure you want to delete it`)) this.onDelete.emit(item.id);
  }

  loadmore() {
    this.onLoadMore.emit();
  }

}

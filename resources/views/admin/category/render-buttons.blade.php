<div class="d-flex align-items-end justify-content-end gap-4">
    <a href="{{ route('admin.categories.edit', ['category' => $category->id]) }}"
       class="no-underline detail icon-notext icon-pencil-square-o"
       title="Editar ou Ver Detalhes"
       alt="Editar ou Ver Detalhes">
    </a>

    <a href="javascript:void(0)" class="icon-notext icon-trash-o no-underline detail ajax_delete"
       title="Deletar Registro" alt="Deletar Registro"
       data-content="{{ $category->id }}"
       data-action="{{ route('admin.categories.destroy', ['category' => $category->id]) }}">
    </a>
</div>

# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: streamlit/proto/Alert.proto
# Protobuf Python Version: 5.27.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    27,
    2,
    '',
    'streamlit/proto/Alert.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1bstreamlit/proto/Alert.proto\"\x87\x01\n\x05\x41lert\x12\x0c\n\x04\x62ody\x18\x01 \x01(\t\x12\x1d\n\x06\x66ormat\x18\x02 \x01(\x0e\x32\r.Alert.Format\x12\x0c\n\x04icon\x18\x03 \x01(\t\"C\n\x06\x46ormat\x12\n\n\x06UNUSED\x10\x00\x12\t\n\x05\x45RROR\x10\x01\x12\x0b\n\x07WARNING\x10\x02\x12\x08\n\x04INFO\x10\x03\x12\x0b\n\x07SUCCESS\x10\x04\x42*\n\x1c\x63om.snowflake.apps.streamlitB\nAlertProtob\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'streamlit.proto.Alert_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\034com.snowflake.apps.streamlitB\nAlertProto'
  _globals['_ALERT']._serialized_start=32
  _globals['_ALERT']._serialized_end=167
  _globals['_ALERT_FORMAT']._serialized_start=100
  _globals['_ALERT_FORMAT']._serialized_end=167
# @@protoc_insertion_point(module_scope)
